#/bin/bash

STR=`grunt`;
SUB='test-template.cfm';

if grep -q "$SUB" <<< "$STR"; then
	echo "[GRUNT] test passed";
else
	echo "[GRUNT] test failed";
	exit 1;
fi
