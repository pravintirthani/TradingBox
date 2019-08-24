<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<title>Company Detail</title>
<link rel="stylesheet" href="./css/Style.css">
<link rel="stylesheet" href="./css/bootstrap.min.css">
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
				<h3>Company Detail</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<table>
					<tr>
						<th>Company ID</th>
						<th>Company Name</th>
					</tr>

					<c:choose>
						<c:when test="${not empty companyDetail}">
							<c:forEach var="company" items="${companyDetail}">
								<tr>
									<td>${company.id}</td>
									<td>${company.name}</td>
								</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr>
								<td colspan="2">No Data Found</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</table>
			</div>
		</div>
</body>
</html>