//I used http://www.javascriptkit.com/script/cut48.shtml to base how on how to make the gpa calculator
//I removed some of the code that was unneccassary because of the way that I implemented it was different.
function gpacalc()
{
//define valid grades and their values
var g = new Array(5); 
var c = new Array(5);
var grade = new Array(8);
var credit = new Array(8);

// number of grades possible
var gradecount = 5; 

//g= grade c= credit
g[0] = "A"; 
c[0] = 4; 
g[1] = "B";
c[1] = 3;
g[2] = "C";
c[2] = 2;
g[3] = "D";
c[3] = 1;
g[4] = "F";
c[4] = 0;
//Get the form input
grade[0] = document.GPA.G1.value;
grade[1] = document.GPA.G2.value;
grade[2] = document.GPA.G3.value;
grade[3] = document.GPA.G4.value;
grade[4] = document.GPA.G5.value;
grade[5] = document.GPA.G6.value;
grade[6] = document.GPA.G7.value;
grade[7] = document.GPA.G8.value;
credit[0] = document.GPA.C1.value;
credit[1] = document.GPA.C2.value;
credit[2] = document.GPA.C3.value;
credit[3] = document.GPA.C4.value;
credit[4] = document.GPA.C5.value;
credit[5] = document.GPA.C6.value;
credit[6] = document.GPA.C7.value;
credit[7] = document.GPA.C8.value;

// Calculate GPA from entered grades
var grades =0;
var credits = 0;
var gpa = 0;
for (var i = 0; i < 5 + 3; i++)
        {
        if (grade[i] == "") break;
//      if (isNaN(parseInt(incr[x]))) alert("Error- You did not enter a numeric  credits value for Class If the class is worth 0 credits then enter the number 0 in  the field."); 
        var validate = 0;
        for (var j = 0; j < gradecount; j++)
                {
                if (grade[i] == g[j])
                        {
                        grades = grades + (parseInt(credit[i],10) * c[j]);
                        credits = credits + parseInt(credit[i],10);
                        validate = 1;
                        break;
                        }
                }
        
        }

// this if-check prevents a divide by zero error

if (credits == 0)
        {
        alert("NaN");
        return 0;
        }
gpa = grades / credits;


document.getElementById('answer').value = gpa;

return gpa;
}




