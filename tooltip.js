//------------------------------------------------------------------
// Usage:
// 	In <head> tag make liks to:
//		<link href="tooltip.css" type=text/css rel=stylesheet>
//		<script type="text/javascript" src="tooltip.js"></script>
//	Object which needs tooltip:
//		<div onmouseover="ShowToolTip(this, event, 'ToolTipText');" onmouseout="HideToolTip(this);">XXX</div>
//	or
//		<img onmouseover="ShowToolTip(this, event, 'ToolTipText');" onmouseout="HideToolTip(this);" src='XXX.jpg'>
//------------------------------------------------------------------
var tooltip = document.createElement("div");
function GetCursorPosition(e) {
	var X = 0;
	var Y = 0;
    if (document.all) {
        X = event.clientX + document.body.scrollLeft;
        Y = event.clientY + document.body.scrollTop;
    }
    else {
        X = e.pageX;
        Y = e.pageY;
    }
    tooltip.style.left = X + "px";
    tooltip.style.top = Y + "px";
    return true;
}
 
function ShowToolTip(Obj, Event, Text){
	AddEventListener('mousemove', Obj, GetCursorPosition);
	GetCursorPosition(Event);
    document.body.appendChild(tooltip);
    tooltip.id = "tooltip";
    tooltip.innerHTML = Text;
}
 
function HideToolTip(Obj) {
	RemoveEventListener('mousemove', Obj, GetCursorPosition);
    document.body.removeChild(document.getElementById(tooltip.id));
}

function AddEventListener(Event, Element, Function) {
	// For compatibility
	if (Element.addEventListener)
		Element.addEventListener(Event, Function, false);
	else if (Element.attachEvent) {
		Element.attachEvent("on"+Event, Function);
	}
	else {
		Element[Event] = Function;
	}
}

function RemoveEventListener(Event, Element, Function) {
	// For compatibility
	if (Element.removeEventListener)
		Element.removeEventListener(Event, Function, false);
	else if (Element.detachEvent) {
		Element.detachEvent("on"+Event, Function);
	}
	else {
		Element[Event] = Function;
	}
}
