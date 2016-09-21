'use strict';

/**
 * @ngdoc overview
 * @name yuanjinweiApp
 * @description
 * # yuanjinweiApp
 *
 * Main module of the application.
 */
var app = angular.module('yuanjinweiApp', ['ui.router','ngSanitize']);
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
		url: '/index',
		templateUrl: 'views/main.html',
		controller: 'zhuye'
	}).state('index.zhuye', {
		url: '/zhuye',
		templateUrl: 'views/zhuye.html',
	}).state('login', {
		url: '/login',
		templateUrl: 'views/login.html',
		controller: 'denglu'
	}).state('zhuce', {
		url: '/zhuce',
		templateUrl: 'views/register.html',
	}).state('index.zc', {
		url: '/zc',
		templateUrl: 'views/zc.html',
	}).state('index.zj', {
		url: '/zj',
		templateUrl: 'views/zhuan-jia1.html',
		controller: 'z_j'
	}).state('index.zcxx', {
		url: '/zcxx',
		templateUrl: 'views/zczxX.html',
		controller: 'zc'
	}).state('index.rencai', {
		url: '/rencai',
		templateUrl: 'views/rccp.html',
	}).state('index.pxrz', {
		url: '/pxrz',
		templateUrl: 'views/pxrz.html',
	}).state('index.sprz', {
		url: '/sprz',
		templateUrl: 'views/sprz.html',
	}).state('index.zjzd', {
		url: '/zjzd#1',
		templateUrl: 'views/zhuanjiazhidao.html',
	}).state('index.zczxS', {
		url: '/zczxS#1',
		templateUrl: 'views/zczxS.html',
	}).state('index.syb', {
		url: '/syb',
		templateUrl: 'views/syb.html',
		controller: 'syb_c'
	}).state('index.sybZx', {
		url: '/sybZx?id&gushi',
		templateUrl: 'views/sybZx.html',
		controller: 'sybZx_c'
	}).state('index.sybTj', {
		url: '/sybTj?id',
		templateUrl: 'views/sybTj.html',
		controller: 'sybTj_c'
	})
	$urlRouterProvider.when('', '/index/zhuye');

})