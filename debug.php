<?php
    function get_Name() 
	{
        return $_SERVER['SERVER_NAME'];
    }

    function get_Metodo() 
	{
        return $_SERVER['REQUEST_METHOD'];
    }

    function get_URI() 
	{
        return $_SERVER['SCRIPT_URI'];
    }
    
    function get_Protocolo() 
	{
        return $_SERVER['SERVER_PROTOCOL'];
    }

    function get_Accept() 
	{
        return $_SERVER['HTTP_ACCEPT'];
    }

    function get_Server_Name()
	{
        return $_SERVER['SERVER_NAME'];
    }

    function getDireccion() 
	{
        return $_SERVER['SERVER_ADDR'];
    }

    function get_Puerto() 
	{
		
        return $_SERVER['SERVER_PORT'];
    }

    function getDocumentRoot() 
	{
        return $_SERVER['DOCUMENT_ROOT'];
    }

    function getUserAgent() 
	{
        return $_SERVER['HTTP_USER_AGENT'];
    }

    function getAcceptAgent() 
	{
        return $_SERVER['HTTP_ACCEPT_AGENT'];
    }

    function getAcceptEncoding() 
	{
        return $_SERVER['HTTP_ACCEPT_ENCODING'];
    }

    function getAcceptLenguaje() 
	{
        return $_SERVER['HTTP_ACCEPT_LANGUAGE'];
    }

    function getConnection() 
	{
        return $_SERVER['HTTP_CONNECTION'];
    }

    function getHost() 
	{
        return $_SERVER['HTTP_HOST'];
    }

    function getServerSoftware() 
	{
        return $_SERVER['SERVER_SOFTWARE'];
    }

    function getGateway() 
	{
        return $_SERVER['GATEWAY_INTERFACE'];
    }

    function getScriptName()
	{
        return $_SERVER['SCRIPT_NAME'];
    }

    function getPhpSelf() 
	{
        return $_SERVER['PHP_SELF'];
    }
?>


<head>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:12px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg th{font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:10px 8px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:black;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <title>PHP DEBUG</title>
</head>


<body>
    <h1>Informacion de Direccion URL : <?php echo get_Name()?> </h1>


    


    <h2> Header Request</h2>
    <table class="tg">
        <tr>
            <th class="tg-0lax">
			Accept
			</th>
            <th class="tg-0lax">
			<?php echo get_Accept()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Cache-Control
			</th>
            <th class="tg-0lax">
			<?php echo get_Accept()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Upgrade-Insecure-Requests
			</th>
            <th class="tg-0lax">
			<?php echo get_Accept()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			User-Agent
			</th>
            <th class="tg-0lax">
			<?php echo getUserAgent()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Accept-Lenguaje
			</th>
            <th class="tg-0lax">
			<?php echo getAcceptLenguaje()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Connection
			</th>
            <th class="tg-0lax">
			<?php echo getConnection()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Host
			</th>
            <th class="tg-0lax">
			<?php echo getHost()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Accept-Encoding
			</th>
            <th class="tg-0lax">
			<?php echo getAcceptEncoding()?>
			</th>
        </tr>
    </table>
	
	<h2>REQUEST - Information </h2>
    <table class="tg">
        <tr>
            <th class="tg-0lax">
			Scheme
			</th>
            <th class="tg-0lax">
			</th>
        </tr>
        <tr>
            <td class="tg-0lax">
			Method
			</td>
            <td class="tg-0lax">
			<?php echo get_Metodo()?>
			</td>
        </tr>
        <tr>
            <td class="tg-0lax">
			URI</td>
            <td class="tg-0lax"> <?php echo get_URI()?></td>
        </tr>
    </table>
	
	<h2>Script - Information </h2>
    <table class="tg">
        <tr>
            <th class="tg-0lax">
			Name
			</th>
            <th class="tg-0lax">
			<?php echo getScriptName()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Filename
			</th>
            <th class="tg-0lax">
			<?php echo getDocumentRoot()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			PHP-SELF
			</th>
            <th class="tg-0lax">
			<?php echo getPhpSelf()?>
			</th>
        </tr>
    </table>
	

    <h2>Server - Informacion</h2>
    <table class="tg">
        <tr>
            <th class="tg-0lax">
			Name
			</th>
            <th class="tg-0lax">
			<?php echo get_Server_Name()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Address
			</th>
            <th class="tg-0lax">
			<?php echo getDireccion()?>
			</th>
        </tr>
        <tr>
            <th class="tg-0lax">
			Server
			</th>
            <th class="tg-0lax">
			<?php echo get_Puerto()?>
			</th>
        </tr>
        <tr>
            <td class="tg-0lax">
			Protocol
			</td>
            <td class="tg-0lax">
			<?php echo get_Protocolo()?>
			</td>
        </tr>
        <tr>
            <td class="tg-0lax">
			DocumentRoot
			</td>
            <td class="tg-0lax"> 
			<?php echo getDocumentRoot()?>
			</td>
        </tr>
        <tr>
            <td class="tg-0lax">
			DocumentRoot</td>
            <td class="tg-0lax">
			<?php echo getServerSoftware()?>
			</td>
        </tr>
        <tr>
            <td class="tg-0lax">
			Gateway Interface
			</td>
            <td class="tg-0lax"> 
			<?php echo getGateway()?>
			</td>
        </tr>
    </table>

    

</body>