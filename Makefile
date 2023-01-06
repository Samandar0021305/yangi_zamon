constop: ##ci/cd delete container. Project container stop -> delete  for project
	docker stop zamon_front || true && docker rm zamon_front || true