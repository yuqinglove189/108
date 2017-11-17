var answer1=['统一建模语言','封装性','继承性','多态性'];
var answer2=['b','a'];
var answer3=['a','b','d'];
var answer4=['a','b','c'];
var answer5=['×','✔'];
var str6=['模型是对理想世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'];
function  count() {
    var scores=0;
    function score1() {
        var result1=[];
        var score1=0;
        var a1=document.getElementsByName('tk');
        for(var i=0;i<a1.length;i++){
            result1.push(a1[i].value);
            //alert(result1[i]);
        }
        for(var j=0;j<result1.length;j++){
            if(answer1.indexOf(result1[j])!=-1)
                score1+=5;
        }
        scores+=score1;
        alert('填空题得分为'+score1);

        return score1;
    }
    score1();

    function score2() {
        var result2=[];
        var score2=0;
        var a2=document.getElementsByClassName('choice');
        for(var i=0;i<a2.length;i++){
            if(a2[i].checked) {
                result2.push(a2[i].value);
                //alert(a2[i].value);
            }
        }
        for(var j=0;j<result2.length;j++){
            if(answer2.indexOf(result2[j])!=-1)
                score2=score2+10;
        }
        //score2=score2_1+score2_2;
        scores+=score2;
        alert('选择题得分为'+score2);
        return score2;
    }
    score2();

    function score3() {
        var result3=[];
        var length=0;
        var score3=0;
        var a3=document.getElementsByName('multiselect1');
        for(var i=0;i<a3.length;i++){
            if(a3[i].checked) {
                result3.push(a3[i].value);
                //alert(a3[i].value);
            }
        }
        for(var s in answer3)
        {
            for(var x in result3)
                if(answer3[s]===result3[x])
                    length++;
        }
        if(length===3)
            score3=10;
        /*
        for(var j=0;j<result3.length;j++){
            if(answer3.indexOf(result3[j])!=-1)
                score3=score3+10;
        }*/
        scores+=score3;
        alert('多择题1得分为'+score3);
        return score3;
    }
    score3();

    function score4() {
        var result4=[];
        var score4=0;
        var length=0;
        var a4=document.getElementsByName('multiselect2');
        for(var i=0;i<a4.length;i++){
            if(a4[i].checked) {
                result4.push(a4[i].value);
                //alert(a3[i].value);
            }
        }
        for(var s in answer4)
        {
            for(var x in result4)
                if(answer4[s]===result4[x])
                    length++;
        }
        if(length===3)
            score4=10;
        /*for(var j=0;j<result4.length;j++){
            if(answer4.indexOf(result4[j])!=-1)
                score4=score4+10;
        }*/
        scores+=score4;
        alert('多择题2得分为'+score4);
        return score4;
    }
    score4();

    function score5() {
        var result5=[];
        var score5=0;
        var a5=document.getElementsByClassName('TF');
        for(var i=0;i<a5.length;i++){
            if(a5[i].checked) {
                result5.push(a5[i].value);
            }
        }
        for(var j=0;j<result5.length;j++){
            if(answer5.indexOf(result5[j])!=-1)
                score5=score5+10;
        }
        scores+=score5;
        alert('判断题得分为'+score5);
        return score5;
    }
    score5();

    function score6() {
        var result6=[];
        var score6=0;
        var str=document.getElementsByClassName('jianda');
        for(var i=0;i<str.length;i++)
            result6.push(str[i].value);
        for(var j=0;j<result6.length;j++){
            if(str6.indexOf(result6[j])!=-1)
                score6=score6+20;
        }
        scores+=score6;
        alert('简答题得分为'+score6);
    }
    score6();
    alert('总分为'+parseInt(scores));
}
