#/bin/bash

STR=`grunt`;
SUB='test-template.cfm';

if grep -q "$SUB" <<< "$STR"; then
	echo "[GRUNT] test passed - '$SUB' found in '$STR'";
else
	echo "[GRUNT] test failed - '$SUB' not found in '$STR'";
	exit 1;
fi
