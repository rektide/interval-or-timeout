#!/usr/bin/env node
"use strict"

function intervalOrTimeout(){
	require( "launch-modules")([ "./interval", "./timeout"])
}

module.exports= intervalOrTimeout()
if( require.main=== module){
	intervalOrTimeout()
}
