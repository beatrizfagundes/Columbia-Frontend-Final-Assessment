var app = angular.module('FinalExam', []);

app.controller('MainController', function ($scope, Homework) {

    Homework.getHomeworks().then(function(response) {
        $scope.homeworks = response;
    });

    $scope.showAssignmentInfo = function (homework) {
        homework.clicked = !homework.clicked;
        homework.completed = (homework.status == 'completed');
    }

});

app.factory('Homework', function ($http) {

    return {
        getHomeworks: function() {
            return $http.get('/').then(function () {
                homeworks = [
                    {
                        assignment: 'Test First JavaScript',
                        url: 'https://github.com/beatrizfagundes/FullstackTestFirst',
                        status: 'incompleted'
                    },
                    {
                        assignment: 'Angular Flash Cards - Day 1',
                        url: 'https://github.com/beatrizfagundes/flashcards-day1',
                        status: 'completed'
                    },
                    {
                        assignment: 'Angular Flash Cards - Day 2',
                        url: 'https://github.com/beatrizfagundes/flash-cards',
                        status: 'completed'
                    }
                ];

                return homeworks;

            });
        }
    };

});
