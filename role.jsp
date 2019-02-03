<!DOCTYPE html>
<html>
<head>
  <title>ColResizable</title>
   <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
  <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
  <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  
 <style type="text/css">
 body{

  font-family: 'verdana';
  
}
table {
  font-size: 18px;
    border-collapse: collapse;
}
td, th {
    border: 1px solid black;
    padding: 20px !important;
    vertical-align: top;
    text-align: left;
    height: 40px;
}

div {
    border:1px solid grey;
}

  </style>

<script src="js/role.js"></script>
</head>
<body>
<center>
	<br/><br/>
	<button id="addProfile">Add Profile</button>
	<button id="showMyRoles">Show My Roles</button>
      <br/><br/><br/>
        <table width="50%">
        
        <tr style="background-color: grey">
          <td>Profiles</td>
          <td>Roles</td>
        </tr>
        <tr>
          <td width="50%" id="_tdprofile">
            <div><span class="glyphicon glyphicon-chevron-down" data-toggle="collapse" href="#profile1roles"></span>Profile1
                <ul id="profile1roles" class="collapse sortableList">
                    <li class="ui-state-default">Role 1</li>
                    <li class="ui-state-default">Role 2</li>
                </ul>
            </div>
            <br/>
            <div><span class="glyphicon glyphicon-chevron-down" data-toggle="collapse" href="#profile2roles"></span>Profile2
                <ul id="profile2roles" class="collapse sortableList">
                    <li class="ui-state-default">Role 4</li>
                </ul>
            </div>
            <br/>
            <div><span class="glyphicon glyphicon-chevron-down" data-toggle="collapse" href="#profile3roles"></span>Profile3
                <ul id="profile3roles" class="collapse sortableList">
                    <li class="ui-state-default">Role 5</li>
                </ul>
            </div>
          </td>

          <td width="50%" id="_tdprofile">
            <div>Select Roles
                <ul id="roles">
                    <!-- <li class="draggable" class="ui-state-highlight">Drag me 1</li> -->
                </ul>
            </div>
          </td>
          
        </tr>
       </table>



</center>

</body>
</html>