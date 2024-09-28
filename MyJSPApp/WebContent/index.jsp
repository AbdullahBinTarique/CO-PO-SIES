<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>My First JSP</title>
</head>
<body>
    <h2>Welcome to My JSP Application</h2>

    <%
        // Java code to generate a greeting
        String name = "Student"; // You can change this to get user input
    %>
    <%  %>

    <h3>Hello, <%= name %>!</h3>
</body>
</html>
