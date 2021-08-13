var user="self";
switch (user) {
    case "admin":
     console.log("you get a full access");
     break;
     case "subadmin":
      console.log("you can access/delete course");
     break;
     case "testprep":
     console.log("you can access/delete test");
     break;
     case "user":
     console.log("you can get access to consume content");
     break;

    default:
        console.log("trial user");
        break;
}