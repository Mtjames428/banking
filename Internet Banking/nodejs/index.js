// // mongo DB ObjectId import
// import {ObjectId} from Mongo
// const student = [
//     {
//     name: 'value for name', 
//     age: 16,
//     }, 
//     {
//     name: 'value for name', 
//     age: 16,
//     }
// ]

// const { Timestamp } = require("mongodb");



// // MONGODB DATA TYPES
// // Strings: should be in single or double quoted 
// let json_string = {
//     "name": "Vera",
//     "course_options": ['Mongo DB', "React35", "Python"],
// }

// // Numbers: 
// let jsonNumber = {
//     'age': 34,
//     'lucky_numbers': [16, 25, 43, 32, 54]
// }

// // boolean: true/false.
// let json_Boolean = {
//     'isMongoDBStudent': true,
//     'more_info': {
//     'isFootballFan': false,
//     'hasSsportBike': true,
//     'graduatedFromNIIT': false
//     }
// }

// // Object
// let json_object = {
//     'biodata': {
//         'name': 'Vera charles',
//         'age': 20,
//         'profession': 'cardiologist',
//         'matdata': {
//             'address': 'NIIT Abuja',
//             'martial_status': 'single'
//         }
//     }
// }

// // Array
// let json_array = {
//     'available_slots': [5, 10, 15, 20, 25, 30, ['toyota', 'hands', 'ford']]
// }
// // console.log('json_array index 3: ', json_array.available_slots[3]);
// console.log('json_array index 3: ', json_array.available_slots[6][1]);

// [
//     {'movie_title': 'apocalipo', 'director': 'some guy', 'release_year': 2021, 'genres': ['history', 'drama', 'action']}, 
//     {'movie_title': 'blood shot', 'director': 'some body', 'release_year': 2020, 'genres': ['action', 'drama', 'crime']}
// ]

// [
//     {
//         'name': 'some guy',
//         'email': 'someguy@gmail.com',
//         'date': '2026-7-10',
//         'note': 'this is a dummy comment for an activity'
//     },
//     {
//         'name': 'some body',
//         'email': 'somebody@gmail.com',
//         'date': '2026-9-12',
//         'note': 'this is a dummy comment for an activity'
//     }
// ]


// // db.movies.updateOne({'directory': 'some'}, {$set: {'comment': [
// //     {
// //         'name': 'some guy',
// //         'email': 'someguy@gmail.com',
// //         'date': '2026-7-10',
// //         'note': 'this is a dummy comment for an activity'
// //     },
// //     {
// //         'name': 'some body',
// //         'email': 'somebody@gmail.com',
// //         'date': '2026-9-12',
// //         'note': 'this is a dummy comment for an activity'
// //     }
// // ]
// // }})

// // Using Mongo DB Object libary
// const anasId = new ObjectId();
// const mitchellId = new ObjectId();
// // console.log('Ana unique ID', anasId);
// // console.log('Mitchell unique ID', mitchellId);
// // get id creation time
// // console.log('Anas created id at: ', anasId.getTimestamp());


// // Knowing the time a database was made
// // console.log('Ana unique ID', anasId.getTimestamp());

// // let time = new Data();
// // const currentTime = time.currentTime();
// // console.log(currentTime);

let now = new Data().getToLocalString();
console.log(now);

let jsonData = {
    'name': 'name value',
    'cars': {
        'toyota': ['camry', 'corolla', {'$prices': [2500, 3000]}], 
        'honda': ['civic', 'EOD'],
        'trucks': {
            'heavy': ['mack', 'daff'],
            'light': ['hilux', 'packer']
        },
    }, 
    'colors': ['red', 'green', 'blue']
};

// Queury Documents
// find() | returns all documents in a collection when no filter criteria is provided
// find | returns specific documents in a collection passing a filter: find({value1, key...n, ...})
// {'name': "Mitchell", 'age': 16, 'course': 'technology'}




[{
        'name': 'Jaken',
        'age': 48,
        'course': 'cyber security',
        'languages': ['java', 'python', 'C++'],
        'other':  {
            'hobby': 'football',
            'number_of_pet': 10
        }
    }, 
    {
        'name': 'Joe',
        'age': 63,
        'course': 'lecturer',
        'languages': ['java', 'C#', 'C++'],
        'other':  {
            'hobby': 'football',
            'number_of_pet': 10
        }
    },
    {
            'name': 'Jason',
        'age': 30,
        'course': 'data scientist',
        'languages': ['javascript', 'python', 'C++'],
        'other':  {
            'hobby': 'football',
            'number_of_pet': 10
        } 
    } 
]

// SORTING DOCUMENTS / QUERIES
// decending order '-'
db.students.find().sort({'age': -1})

// ascending queries
db.students.find().sort({'age': +1})

// SKIPPING
// with sorting
db.students.find().sort({'age': -1}).skip(6) // skipping the first 6 and showing the last 3

// without sorting
db.students.find().sort().skip(6)

// LIMIT queries / document
db.students.find().limit(2)  // limited to only 2 documents to appear 

db.collection.find({'category': 'politics'}) // 200 blog posts
db.collection.find({'category': 'politics'}).sort({'date_created': 1}) // sorting in ascending order

// assuming on page 1
db.collection.find({'category': 'politics'}).sort({'date_created': 1}).limit(10)

// assuming on page 2
db.collection.find({'category': 'politics'}).sort({'date_created': 1}).skip(10).limit(10)

// assuming on page 3
db.collection.find({'category': 'politics'}).sort({'date_created': 1}).skip(20).limit(10)

// assuming on page 4
db.collection.find({'category': 'politics'}).sort({'date_created': 1}).skip(30).limit(10)

//....

    [{
        'name': 'Jake',
        'age': 36,
        'course': 'data scientist',
        'languages': ['javascript', 'python', 'C++'],
        'other':  {
            'hobby': 'football',
            'number_of_pet': 11
        } 
    },
    {   
        'name': 'Mikkie',
        'age': 68,
        'course': 'computer scientist',
        'languages': ['java', 'python', 'C++'],
        'other':  {
            'hobby': 'football',
            'number_of_pet': 13
        }
    }]
  

    
[    
    {
        'name': 'Racheal',
        'age': 62,
        'course': 'Lawyer',
         'languages': ['javascript', 'python', 'C++']
    },
    {
        'name': 'Nor',
        'age': 72,
        'course': 'Neorosurgeon',
        'languages': ['javascript', 'C#', 'C++']
    },
    {
        'name': 'Kevin',
        'age': 32,
        'course': 'Wrestler',
        'languages': ['javascript', 'python', 'java']
    },
    {
        'name': 'Alex',
        'age': 63,
        'course': 'Hardware Engineer',
        'languages': ['data', 'python', 'C++']
    },
    {
        'name': 'Amanda',
        'age': 39,
        'course': 'Teacher',
        'languages': ['mongoDb', 'python', 'C++']
    },
    {
        'name': 'Raph',
        'age': 29,
        'course': 'Networking',
        'languages': ['phtyhon', 'rust', 'tensor'] 
    } 
]

/* 
    {
        'age': 43
    },
    {
        'name': 'Raph',
        'age': 29,
        'course': 'Networking',
        'languages': ['phtyhon', 'rust', 'tensor'] 
    } 

*/

{
    $upsert: true;
}

// findOneAndReplace
// {'age': 30}, {'name': 'find one and delete', 'age': 39, 'course': 'data analysis'}



db.students.findOneAndReplace({'name': 'Fred'}, {'name': 'Jacob', 'age': 66, 'course': 'Fishery'}), {sort : {'name': -1}}



db.students.updateOne(
    {'name': 'Amanda'},
    {$set:  { 'name': 'Priscilla'}}
)

db.students.updateOne(
    {'name': 'Priscilla'},
    {$set:  { 'name': 'Priscilla', 'hobby': 'reading', 'age': 17}},
    {$upsert: true},
    {$sort: {'age': -1}}
)

db.students.findOneAndReplace(
    {
        'name': 'Micheal', // the original
    },
    {
        'name': 'Captain Hook', // the replacer
        'age': 48,
        'course': 'computer scientist',
        'languages': ['java', 'python', 'C++'],
        'other': { hobby: 'football', number_of_pet: 13 }
    }
)

// to give everyone likes
db.students.updateMany(
    {},
    {
        $set: {
            'likes': 1
    }
},
    {
        $upsert: true
    }
) 

db.students.updateMany(
    {},
    {
        $set: {'year started': 2026}
    },
    {
        $upsert: true
    }
)



db.students.updateMany(
    {},
    {
        $rename: {
            'course': 'subject'
        }
    }
)

db.students.updateMany(
    {},
    {
        $currentDate: {
            'account_creation_date': true
        }
    }
)

db.students.updateMany(
    {},
    {
        $currentDate: {
            'Now_time': {
                $type: 'timestamp'
            }
        }
    }
)

db.students.updateMany(
    {},
    {
        $currentDate: {
            'Now_time': {
                $type: 'timestamp'
            }
        }
    }
)

//unset is used to delete field from documents.
db.students.updateMany(
    {},
    {
        $unset: {
            'Now_time': ''
        }
    }
)

db.students.updateMany(
    {},
    {
        $setOnInsert: {
            'role': 'user'
        }
    }
), 
{
    $upset: true
}

db.students.updateMany(
    {},
    {
        $setOnInsert: {
            'role': 'admin'
        }
    
    }
)


db.students.updateMany(
    {},
    {
        $setOnInsert: {
            'level': 'user'
        }
    }
), 
{
    $upset: true
}


// updating fields with array types
db.students.findOneAndUpdate(
    {
        'name': 'Jacob'
    },
    {  
        $set: {
            'genre': ['donnet']
        }
    }
)


db.students.findOneAndUpdate(
    {
        'name': 'Jacob'
    },
    {  
        $unset: {
            'genre': ''
        }
    }
)

db.students.findOneAndUpdate(
    {
        'name': 'Jacob'
    },
    {  
        $push: {
            'language': 'soliditary'
        }
    }
)

// pushing more than one member at the same time.
db.students.findOneAndUpdate(
    {
        'name': 'Jacob'
    },
    {  
        $push: {
            'languages': {
            $each: ['java', 'python', 'javascript']
        }
    }
}
)

// ACTIVITY
// 1.
db.students.updateMany(
    {},
    {
        $set: {'tags': ['database']}
    },
    {
        $upsert: true
    }
)

// 2.
db.students.findOneAndUpdate(
    {
        'name': ''
    },
    {  
        $push: {
            'tags': 'mongo db'
        }
    }
)

// 3.
db.students.findOneAndUpdate(
    {
        'name': ''
    },
    {  
        $push: {
            'tags': {
            $each: ['NIIT', 'Abuja', 'Digital']
        }
    }
}
)


// Adding more elements to an array in a sorted order
'Zephyn', 'Verex', 'Raph', 'Barba'

// apply into data base
// 1 | Ascending (Z-A)
db.students.updateMany(
    {},
    {
        $push: {
            'languages': {
                $each: ['Zephyn', 'Verex', 'Raph', 'Barba'],
                $sort: -1
            }
        }
    }
)


// -1 | Descending (A-Z)
db.students.updateMany(
    {},
    {
        $push: {
            'languages': {
                $each: ['Zephyn1', 'Verex', 'Raph1', 'Barba1'],
                $sort: -1
            }
        }
    }
)

// addToSet | to insert only unique elements into an array field, similar to '$push' but pushed on unique members elements
// $push | adds a member even if they are duplicates
// $addToSet | adds a member and removes the duplicates

db.students.updateMany(
    {},
    {
        $addToSet: {
            'languages': {
                $each: ['Zephyn', 'Verex', 'Raph', 'Barba']
            }
        }
    }
)

// '$pop' | -1: deletes the first member of the array
// '$pop' | 1: deletes the last member of the array

db.students.updateMany(
    {},
    {
        $pop: {
            'languages': 1
        }
    }
)
db.students.updateMany(
    {},
    {
        $pop: {
            'languages': -1
        }
    }
)

// ACTIVITY
// 1.
db.students.updateMany(
    {},
    {
        $set: {'models': [2009, 2012, 2015, 2020]}
    },
    {
        $upsert: true
    }
)

// 2.
db.students.findOneAndUpdate(
    {
        'name': ''
    },
    {  
        $push: {
            'models': {
            $each: [2007]
        }
    }
}
)

// 3.
db.students.updateMany(
    {},
    {
        $pop: {
            'models': -1
        }
    }
)

// 4
db.students.updateMany(
    {},
    {
        $pop: {
            'models': 1
        }
    }
)

// $pullAll | deleting a selected members from the array
// deleting members with the 'the number 1'
db.students.updateMany(
    {},
    {
        $pullAll: {
            'languages': ['Zephyn', 'Verex', 'Raph', 'Barba'] // deleting these members from the 'languages' array
        }
    }
)

// $pull | delete from an array of objects
[
    {
        'name': 'Jane Query',
        'counts': 12,
        'isActive': true
    },
    {
        'name': 'Patra Query',
        'counts': 14,
        'isActive': true
    },
    {
        'name': 'Pebble Query',
        'counts': 10,
        'isActive': true
    },
    {
        'name': 'Donny Query',
        'counts': 11,
        'isActive': true
    }
]

db.students.updateMany(
    {},
    {
        $set: {
            'list': [
    {
        'name': 'Jane Query',
        'counts': 12,
        'isActive': true
    },
    {
        'name': 'Patra Query',
        'counts': 14,
        'isActive': true
    },
    {
        'name': 'Pebble Query',
        'counts': 10,
        'isActive': true
    },
    {
        'name': 'Donny Query',
        'counts': 11,
        'isActive': true
    }
]
        }
    }
)

// delete object from list where count = 12
db.students.updateMany(
    {},
    {
        $pull: {
            'list': {
                count: 12
            }
        }
    }
)

// fuctions.
// Aggregate() | ann advance alternative to find(), widely used for building pipelines
/* db.data.aggregate([
    {
        $group: {'_id': '$airTemperature.value'}
    },
    {
        $limit: 50
    }
]) */



db.data.aggregate([
    {
        $sort: {
            'airTemperature': 1
        }
    },
    {
        $group: {'_id': '$airTemperature.value', 'count': {$count: {}}}
    },
    {
        $limit: 50
    }
])

///////////////////

db.data.aggregate([
    {
        $sort: {
            'airTemperature': 1
        }
    },
    {
        $limit: 50
    },
    {
        $project: {
            'dewPoint': 0,
            'pressure': 0,
            'wind': 0,
            'visibility': 0,
            'skyConditions': 0,
            'section': 0,
            'liquidPrescipitation': 0,
            'precipitationEstimateObservation': 0,
            'pastWeatherObservationManual': 0,
            'skyConditionObservation': 0,
            'extremeAirTemperature': 0,
            'atmosphericPresuureObservation': 0,
            'presentWeatherObservationmanual': 0,
            'atmosphericPressureChange': 0
        }
    }
])

/////////////////////////

db.data.aggregate([
    {
        $sort: {
            'airTemperature': 1
        }
    },
    {
        $group: {
            '_id': '$callLetters',
            '$count': {

            }
        }
    },
    {
        $limit: 50
    },
    {
        $project: {
            'dewPoint': 0,
            'pressure': 0,
            'wind': 0,
            'visibility': 0,
            'skyConditions': 0,
            'section': 0,
            'liquidPrescipitation': 0,
            'precipitationEstimateObservation': 0,
            'pastWeatherObservationManual': 0,
            'skyConditionObservation': 0,
            'extremeAirTemperature': 0,
            'atmosphericPresuureObservation': 0,
            'presentWeatherObservationmanual': 0,
            'atmosphericPressureChange': 0
        }
    }
])

// aggregate pipelines
// match operator
db.sales.aggregate(
    {
        $match: {'customer.gender': 'F'}
    },
    {
        $count: 'total numbers of female customers'
    }
)

db.sales.aggregate(
    {
        $match: {'customer.gender': 'M'}
    },
    {
        $count: 'total numbers of male customers'
    }
)

db.sales.aggregate(
    {
        $match: {'items.name': 'pens'}
    },
    {
        $count: 'total numbers of customers that purchases pens'
    }
)


db.sales.aggregate(
    {
        $project: {'items': 0}
    },
    {
        $limit: 5
    }
)

db.sales.aggregate(
    {
        $match: {'purchaseMethod': 'Phone'}
    },
    {
        $project: {'items': 0}
    },
    {
        $count: 'total numbers of customers that purchaseMethod Phone'
    }
)


s