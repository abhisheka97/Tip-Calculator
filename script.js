
        document.getElementById('container').onchange =function(){
            var bill=Number(document.getElementById('billTotal').value);
            var tipPercent = document.getElementById('tipInput').value;
            var split = document.getElementById('splitInput').value;
            document.getElementById('tipOutput').innerHTML=tipPercent +"%";
            document.getElementById('splitOutput').innerHTML=split;
            var tipValue = bill*(tipPercent /100);
            var newBillEach = (bill+tipValue)/split;
            var tipEach = tipValue/split;
            
            document.getElementById('newBill').innerHTML ="Rs "+newBillEach.toFixed(2);
            document.getElementById('tipEach').innerHTML="Rs "+tipEach.toFixed(2);
            

        }
        