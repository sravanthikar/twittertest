		var app = angular.module('myApp', []);
		app.controller('mainCtrl', ["$scope", function ($scope) {
			$scope.catagories = ["Boring", "Introductory", "Spammer", "Quote", "Retweet", "Marketing", "Link"];
			$scope.clicks = 0;
			$scope.comments = 0;
			$scope.topFollowers = ["John", "Bill", "Tim", "Bruice", "Peter", "Tony", "Tom", "Smith", "Antony", "Clerk"];
			$scope.retweets = 25;
			$scope.lastUpdatedTime = "";
			var date = new Date();
			$scope.lastUpdatedTime = date.toLocaleTimeString();
			$scope.totalTweets = 59;

			$scope.status = [];

			$scope.showComment = false;

			$scope.addStatus = function(){
				$scope.status.push($scope.dataPost);
			}

			$scope.commentFunction = function(data){
				$scope.showComment = true;
			}
			$scope.commentsGroup = [];
			$scope.commentMain = function(){
				$scope.showComment = false;
				var date = new Date();
				$scope.lastUpdatedTime = date.toLocaleTimeString();
				$scope.commentsGroup.push($scope.commentsMain);
				$scope.commentsMain = "";
				$scope.comments += 1;
			}
			$scope.likeClick = function(){
				$scope.clicks += 1;
			}

		}])
		

