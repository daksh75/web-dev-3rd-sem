use("collegeDB");
db.Students2.aggregate([
    {
        $match: {
          course:"BTech",
          city:"GGN"
        }
    },
    {
        $project: {
          name:1,
          age:1,
          sem:1,
          course:1
        }
    }
])