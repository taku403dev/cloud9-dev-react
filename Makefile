setup:
	mkdir $${HOME}/.npm-global && \
	npm -g install node-sass typescript yarn ts-node typesync

clean:
	npm -g uninstall node-sass typescript yarn ts-node typesync && \
	rm -rf "$${HOME}/.npm-global/$*"

start:
	npx node-sass -rw . -o . --source-map true

stop:
	@ps -x | grep 'npm exec node-sass -rw . -o . --source-map true' | grep -v grep | awk '{print "kill", $$1}' | bash && \
