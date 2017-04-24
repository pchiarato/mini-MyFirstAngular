angular.module("friendsList").controller("mainCtrl", function($scope){
    
    $scope.title = "MY FRIENDS";
    $scope.friendInput;
    
    $scope.friends = ["Jordyn","Ryan","chelsey"];
    
    $scope.addFriend = function(){
        $scope.friends.push($scope.friendInput);
        $scope.friendInput = "";
    }
    
});