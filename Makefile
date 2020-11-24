push:
	git add .
	git commit -m "$m"
	git push https://github.com/CharlyF889/StaticFlownect.git

restart:
	sudo service nginx restart