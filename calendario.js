console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/

var diasMayo = {"firstWeekDay": "mon", "days": 31}
var eventosEnero = [];
var eventosFebrero = [];
var eventosMarzo = [];
var eventosAbril = [];
var eventosMayo = [];
var eventosJunio = [];
var eventosJulio = [];
var eventosAgosto = [];
var eventosSeptiembre = [];
var eventosOctubre = [];
var eventosNoviembre = [];
var eventosDiciembre = [];
eventosEnero[1]="";


for(var i = 1; i <= 31; i++) {
    eventosEnero[i]="";
     eventosFebrero[i]="";
     eventosMarzo[i]="";
     eventosAbril[i]="";
     eventosMayo[i]="";
     eventosJunio[i]="";
     eventosJulio[i]="";
     eventosAgosto[i]="";
     eventosSeptiembre[i]="";
     eventosOctubre[i]="";
     eventosNoviembre[i]="";
     eventosDiciembre[i]="";
        }



function addEventToDay(selectedMonth,day) {
    
    var eventText = window.prompt("Ingrese texto del evento: ");

    if(eventText) {
        if(parseInt(selectedMonth)==0)
        {
            eventosEnero[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==1)
        {
            eventosFebrero[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==2)
        {
            eventosMarzo[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==3)
        {
            eventosAbril[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==4)
        {
            eventosMayo[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==5)
        {
            eventosJunio[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==6)
        {
            eventosJulio[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==7)
        {
            eventosAgosto[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==8)
        {
            eventosSeptiembre[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==9)
        {
            eventosOctubre[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==10)
        {
            eventosNoviembre[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }
        if(parseInt(selectedMonth)==11)
        {
            eventosDiciembre[day] = eventText;
            renderSelectedMonth(selectedMonth);
        }


    }
}
		    
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += day;

    if(eventosMayo[day]) {
	dayHTML += "<hr/>";
	dayHTML += eventosMayo[day];
    }
	
    dayHTML += "</td>";
    return dayHTML;
}

function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
    var weekDayIdx = 0;
    var newHTML = "";
    var newSemanaHTML = "";   
    
    for(var i = 1; i <= diasMayo.days; i++) {
	if(weekDayIdx == 0) {
	    newSemanaHTML += "<tr>";
	}

	newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	if(weekDayIdx == 6 || (i + 1) > diasMayo.days) {
	    newSemanaHTML += "</tr>";
	    newHTML += newSemanaHTML;
	    newSemanaHTML = "";
	}
	
	weekDayIdx = (weekDayIdx + 1) % 7;	
    }

    return newHTML;
}

function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    }

    throw new Error("No existe mes con indice: " + month);
}


function renderSelectedMonth(selectedMonth) {
    console.log(selectedMonth);

    var monthName = getMonthName(selectedMonth);
    console.log(monthName);

    // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";

    /*
    Aqui usted debe renderizar la tabla con los dias del mes
    Utilice la información en el objeto 'diasMayo' o el que
    corresponda según el mes seleccionado.

    A modo de demostración, el siguiente código renderiza
    la tabla con el mes de Mayo.
    */

    newHTML += getDias(selectedMonth);

    /* Fin de la tabla */
    newHTML += "</table>";

    /* Actualizamos el innerHTML del div currentMonth */
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}



function getDias(selectedMonth){
	var newHTML = "";
	switch(parseInt(selectedMonth)) {
    case 0: 
	newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosEnero[1]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosEnero[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosEnero[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosEnero[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosEnero[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosEnero[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosEnero[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosEnero[8]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosEnero[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosEnero[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosEnero[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosEnero[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosEnero[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosEnero[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosEnero[15]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosEnero[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosEnero[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosEnero[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosEnero[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosEnero[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosEnero[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosEnero[22]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosEnero[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosEnero[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosEnero[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosEnero[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosEnero[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosEnero[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosEnero[29]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                       newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosEnero[30]+"</td>";
                       newHTML += "<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosEnero[31]+"</td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";
	return newHTML;
    
    
    case 1: 

    newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosFebrero[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosFebrero[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosFebrero[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosFebrero[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosFebrero[5]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosFebrero[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosFebrero[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosFebrero[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosFebrero[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosFebrero[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosFebrero[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosFebrero[12]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosFebrero[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosFebrero[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosFebrero[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosFebrero[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosFebrero[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosFebrero[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosFebrero[19]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosFebrero[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosFebrero[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosFebrero[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosFebrero[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosFebrero[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosFebrero[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosFebrero[26]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosFebrero[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosFebrero[28]+"</td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";
	return newHTML;

    case 2: 
    newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosMarzo[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosMarzo[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosMarzo[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosMarzo[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosMarzo[5]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosMarzo[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosMarzo[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosMarzo[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosMarzo[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosMarzo[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosMarzo[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosMarzo[12]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosMarzo[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosMarzo[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosMarzo[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosMarzo[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosMarzo[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosMarzo[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosMarzo[19]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosMarzo[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosMarzo[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosMarzo[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosMarzo[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosMarzo[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosMarzo[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosMarzo[26]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosMarzo[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosMarzo[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosMarzo[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosMarzo[30]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosMarzo[31]+"</td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";

	return newHTML;
    case 3: 

    newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosAbril[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosAbril[2]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosAbril[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosAbril[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosAbril[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosAbril[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosAbril[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosAbril[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosAbril[9]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosAbril[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosAbril[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosAbril[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosAbril[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosAbril[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosAbril[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosAbril[16]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosAbril[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosAbril[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosAbril[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosAbril[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosAbril[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosAbril[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosAbril[23]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosAbril[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosAbril[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosAbril[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosAbril[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosAbril[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosAbril[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosAbril[30]+"</td>";
                    newHTML +="</tr>";
	return newHTML;
    case 4: 
    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosMayo[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosMayo[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosMayo[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosMayo[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosMayo[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosMayo[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosMayo[7]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosMayo[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosMayo[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosMayo[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosMayo[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosMayo[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosMayo[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosMayo[14]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosMayo[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosMayo[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosMayo[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosMayo[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosMayo[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosMayo[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosMayo[21]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosMayo[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosMayo[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosMayo[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosMayo[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosMayo[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosMayo[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosMayo[28]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosMayo[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosMayo[30]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosMayo[31]+"</td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";
	return newHTML;
    case 5: 
   newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosJunio[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosJunio[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosJunio[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosJunio[4]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosJunio[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosJunio[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosJunio[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosJunio[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosJunio[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosJunio[01]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosJunio[11]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosJunio[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosJunio[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosJunio[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosJunio[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosJunio[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosJunio[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosJunio[18]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosJunio[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosJunio[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosJunio[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosJunio[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosJunio[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosJunio[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosJunio[25]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosJunio[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosJunio[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosJunio[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosJunio[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosJunio[30]+"</td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                    newHTML +="</tr>";
	return newHTML;

    case 6: 
    newHTML +="<tr>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosJuio[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosJuio[2]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosJuio[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosJuio[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosJuio[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosJuio[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosJuio[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosJuio[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosJuio[9]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosJuio[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosJuio[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosJuio[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosJuio[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosJuio[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosJuio[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosJuio[16]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosJuio[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosJuio[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosJuio[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosJuio[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosJuio[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosJuio[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosJuio[23]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosJuio[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosJuio[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosJuio[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosJuio[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosJuio[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosJuio[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosJuio[30]+"</td>";
                    newHTML +="</tr>" ;
                    newHTML +="<tr>";
                       newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosJuio[31]+"</td>";
                       newHTML += "<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";
    return newHTML;
    
    case 7:
            newHTML +="<tr>";
            newHTML +="<td></td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosAgosto[1]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosAgosto[2]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosAgosto[3]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosAgosto[4]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosAgosto[5]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosAgosto[6]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosAgosto[7]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosAgosto[8]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosAgosto[9]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosAgosto[10]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosAgosto[11]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosAgosto[12]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosAgosto[13]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosAgosto[14]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosAgosto[15]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosAgosto[16]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosAgosto[17]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosAgosto[18]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosAgosto[19]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosAgosto[20]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosAgosto[21]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosAgosto[22]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosAgosto[23]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosAgosto[24]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosAgosto[25]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosAgosto[26]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosAgosto[27]+"</td>";
        newHTML +="</tr>";
        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosAgosto[28]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosAgosto[29]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosAgosto[30]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosAgosto[31]+"</td>";
            newHTML +="<td></td>";
            newHTML +="<td></td>";
            newHTML +="<td></td>";
        newHTML +="</tr>";
return newHTML;    
    
    case 8: 
    newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosSeptiembre[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosSeptiembre[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosSeptiembre[3]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosSeptiembre[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosSeptiembre[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosSeptiembre[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosSeptiembre[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosSeptiembre[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosSeptiembre[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosSeptiembre[10]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosSeptiembre[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosSeptiembre[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosSeptiembre[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosSeptiembre[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosSeptiembre[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosSeptiembre[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosSeptiembre[17]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosSeptiembre[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosSeptiembre[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosSeptiembre[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosSeptiembre[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosSeptiembre[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosSeptiembre[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosSeptiembre[24]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosSeptiembre[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosSeptiembre[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosSeptiembre[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosSeptiembre[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosSeptiembre[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosSeptiembre[30]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosSeptiembre[31]+"</td>";
                    newHTML +="</tr>";
                    
	return newHTML;

    case 9:
            newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosOctubre[1]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosOctubre[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosOctubre[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosOctubre[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosOctubre[5]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosOctubre[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosOctubre[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosOctubre[8]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosOctubre[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosOctubre[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosOctubre[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosOctubre[12]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosOctubre[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosOctubre[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosOctubre[15]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosOctubre[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosOctubre[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosOctubre[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosOctubre[19]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosOctubre[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosOctubre[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosOctubre[22]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosOctubre[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosOctubre[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosOctubre[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosOctubre[26]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosOctubre[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosOctubre[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosOctubre[29]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                       newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosOctubre[30]+"</td>";
                       newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosOctubre[31]+"</td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                        newHTML +="<td ></td>";
                    newHTML +="</tr>" ;
	return newHTML; 

    
    case 10: 
           newHTML +="<tr>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosNoviembre[1]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosNoviembre[2]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")>3. "+eventosNoviembre[3]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosNoviembre[4]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosNoviembre[5]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosNoviembre[6]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosNoviembre[7]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosNoviembre[8]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosNoviembre[9]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosNoviembre[10]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosNoviembre[11]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosNoviembre[12]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosNoviembre[13]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosNoviembre[14]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosNoviembre[15]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosNoviembre[16]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosNoviembre[17]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosNoviembre[18]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosNoviembre[19]+"</td>";
                    newHTML +="</tr>";

                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosNoviembre[20]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosNoviembre[21]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosNoviembre[22]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosNoviembre[23]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosNoviembre[24]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosNoviembre[25]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosNoviembre[26]+"</td>";
                    newHTML +="</tr>";
                    newHTML +="<tr>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosNoviembre[27]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosNoviembre[28]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosNoviembre[29]+"</td>";
                        newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosNoviembre[30]+"</td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                        newHTML +="<td></td>";
                    newHTML +="</tr>";
	return newHTML; 
    
    case 11:
            newHTML +="<tr>";
            newHTML +="<td></td>";
            newHTML +="<td></td>";
            newHTML +="<td></td>";
            newHTML +="<td></td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"1"+ ")>1. "+eventosDiciembre[1]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"2"+ ")>2. "+eventosDiciembre[2]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"3"+ ")3. "+eventosDiciembre[3]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"4"+ ")>4. "+eventosDiciembre[4]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"5"+ ")>5. "+eventosDiciembre[5]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"6"+ ")>6. "+eventosDiciembre[6]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"7"+ ")>7. "+eventosDiciembre[7]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"8"+ ")>8. "+eventosDiciembre[8]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"9"+ ")>9. "+eventosDiciembre[9]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"10"+ ")>10. "+eventosDiciembre[10]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"11"+ ")>11. "+eventosDiciembre[11]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"12"+ ")>12. "+eventosDiciembre[12]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"13"+ ")>13. "+eventosDiciembre[13]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"14"+ ")>14. "+eventosDiciembre[14]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"15"+ ")>15. "+eventosDiciembre[15]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"16"+ ")>16. "+eventosDiciembre[16]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"17"+ ")>17. "+eventosDiciembre[17]+"</td>";
        newHTML +="</tr>";

        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"18"+ ")>18. "+eventosDiciembre[18]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"19"+ ")>19. "+eventosDiciembre[19]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"20"+ ")>20. "+eventosDiciembre[20]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"21"+ ")>21. "+eventosDiciembre[21]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"22"+ ")>22. "+eventosDiciembre[22]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"23"+ ")>23. "+eventosDiciembre[23]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"24"+ ")>24. "+eventosDiciembre[24]+"</td>";
        newHTML +="</tr>";
        newHTML +="<tr>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"25"+ ")>25. "+eventosDiciembre[25]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"26"+ ")>26. "+eventosDiciembre[26]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"27"+ ")>27. "+eventosDiciembre[27]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"28"+ ")>28. "+eventosDiciembre[28]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"29"+ ")>29. "+eventosDiciembre[29]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"30"+ ")>30. "+eventosDiciembre[30]+"</td>";
            newHTML +="<td onclick=addEventToDay("+selectedMonth+","+"31"+ ")>31. "+eventosDiciembre[31]+"</td>";
        newHTML +="</tr>";
return newHTML;  
    }
	
}