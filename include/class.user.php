<?php
require_once('dbconfig.php');
date_default_timezone_set("Asia/Manila");

class USER
{	
	private $conn;
	
	public function __construct()
	{
		$database = new Database();
		$db = $database->dbConnection();
		$this->conn = $db;
  }
	
	public function runQuery($sql)
	{
		$stmt = $this->conn->prepare($sql);
		return $stmt;
	}

	public function lastInsertId(){
    return $this->conn->lastInsertId();
  }
	
	public function doLogin($username, $password)
	{
		try
		{
			$stmt = $this->conn->prepare("SELECT * FROM users WHERE username = :username");
			$stmt->execute(array(':username' => $username));
			$userRow = $stmt->fetch(PDO::FETCH_ASSOC);
			if($stmt->rowCount() == 1)
			{
				if(password_verify($password, $userRow['password']))
				{
					$cookie_name = "user";
					$cookie_value = $userRow['uuid'];

					setcookie($cookie_name, $cookie_value, time() + (3600 * 2), "/"); //Set cookie for 2 hours
					return true;
				}
				else
				{
					return false;
				}
			}
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}
	}
	
	public function is_loggedin()
	{
		if(isset($_COOKIE['user']))
		{
			return true;
		}
	}

	/*public function redirect($url)
	{
		header("Location: $url");
	}*/
	
	public function doLogout()
	{
		setcookie('user', '', time() - (86400 * 30), '/');
		return true;
	}

	public function uuid()
	{
	    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',

						// 32 bits for "time_low"
						mt_rand(0, 0xffff), mt_rand(0, 0xffff),

						// 16 bits for "time_mid"
						mt_rand(0, 0xffff),

						// 16 bits for "time_hi_and_version",
						// four most significant bits holds version number 4
						mt_rand(0, 0x0fff) | 0x4000,

						// 16 bits, 8 bits for "clk_seq_hi_res",
						// 8 bits for "clk_seq_low",
						// two most significant bits holds zero and one for variant DCE1.1
						mt_rand(0, 0x3fff) | 0x8000,

						// 48 bits for "node"
						mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
					);
	}

	public function register($uuid, $username, $password){

		try
		{
			$hashed_password = password_hash($password, PASSWORD_DEFAULT);
			
			$stmt = $this->conn->prepare("INSERT INTO 
											users (
												uuid,
												username,
												password
											) 
		                                VALUES (
		                                		:uuid,
		                                		:username,
		                                		:password
		                                	)");
				
			$stmt->bindparam(":uuid", 		$uuid);				  
			$stmt->bindparam(":username", 	$username);
			$stmt->bindparam(":password", 	$hashed_password);
				
			$stmt->execute();
			
			return $stmt;	
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}	

	}

}
?>