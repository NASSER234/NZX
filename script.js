
function minToHours(e){var d=parseInt(Math.floor(e/60)),f=parseInt(e%60);return d<=0?f+"دقيقة ":d+"ساعة  و "+f+" دقيقة "}$(document).ready(function(){setInterval(function(){$(".underway1").fadeOut(700),$(".underway1").fadeIn(700)},1000),$(".date").each(function(){var l=$(this),h=l.data("start"),f=l.data("gameends"),k=moment(h,"YYYY-MM-DD HH:mm:ssZ"),c=moment(f,"YYYY-MM-DD HH:mm:ssZ"),o=moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),g=k.diff(o,"minutes"),j=c.diff(o,"minutes");switch(!0){case 30<g:var b=moment.utc(h).toDate();l.parent().find(".stsrt").text(moment(b).format("LT")),b=moment(b).format("YYYY-MM-DD HH:mm:ssZ"),l.countdowntimer({dateAndTime:b,});break;case 0<g:var b=moment.utc(h).toDate();l.parent().find(".stsrt").text(moment(b).format("LT"));l.parent().find(".date").html("ستنطلق بعد قليل").addClass("soon");break;case 0<j:l.parent().find(".date").html("مباشر الان").addClass("underway");var b=moment.utc(h).toDate();l.parent().find(".stsrt").text(moment(b).format("LT"));break;default:var b=moment.utc(h).toDate();l.parent().find(".stsrt").text(moment(b).format("LT"));l.parent().find(".date").html("إنتهت شاهد الملخص").addClass("expired")}})});
