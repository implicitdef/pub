.PHONY: deploy

deploy:
	git add .
	git co -am 'deploy'
	git push

