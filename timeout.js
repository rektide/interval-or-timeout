#!/usr/bin/env node
"use strict"

function loop(){
	setTimeout(loop, 100)
}
loop()
