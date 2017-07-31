var contador = 0;
var temp = false;
class Invoice
{
 constructor(titulo){
     
    this.titulo = titulo;
 
	
	this.item = "";
    this.precio = "";
    this.cantidad = "";
    this.output = "";
    this.cuenta = "";
    this.subtotal = "";
    this.totales = "";        
    this.impresion = '*** INVOICE #1 - ' + this.titulo +' ***\n';
    this.dat=[];
    this.cant=[];
    this.pre=[];
    this.header= "";
    this.body= "";
    this.footer= "";
    this.template = "";
    return;
}



     Invoice (){
      return this.titulo;
    }


	addItem(item, precio, cantidad) {
		var numero = 1;
      
		
    	this.item = item;
    	this.precio = precio;
    	if(cantidad == null){
    		this.cantidad = 1;
    	}else{
    		this.cantidad = cantidad;	
    	}

    	//cuenta items   	
    	this.cuenta = parseFloat(numero + this.cuenta);    	
    	//cadena mensaje
    	var mensaje = "";
    	if(this.cuenta == 1){
    		mensaje = ' item';
    	}else{
    		mensaje = ' items';
    	}
    	
        this.dat.push(this.item);
        this.pre.push(this.precio);
        this.cant.push(this.cantidad);

    	
    	var cuenta_total = (parseFloat(this.precio) * parseFloat(this.cantidad));
    	this.subtotal = cuenta_total;

    	this.totales = parseInt((this.totales) + (cuenta_total));

    	return this.cuenta + mensaje;
    }

    getTotal() {    	
    	
    	return this.totales + '€';
	}
	
	static setTemplate(header, body, footer){ 

        this.header = header;
        this.body = body;
        this.footer = footer;
        this.template = this.header;
        if(this.template === "[INVOICE #<ID>] <TITLE>"){
			
		}else{
		return this.template+'\n';
		}
	} 




     print() { 
        if(temp){
            contador ++;
			var p = Invoice.setTemplate('[INVOICE #'+contador+'] '+(!this.titulo ? '<noname>': this.titulo), '', '');            
                for (var i = 0; i < this.dat.length; i++) {
                    var sub = 0;
                    sub = (parseFloat(this.pre[i]) * parseFloat(this.cant[i]));
                    p += ' + [' + this.dat[i] +' ' + this.pre[i] +'€] x ' + this.cant[i] + ' : '+ sub + '€\n';
                }
				p+= ' +--- TOTAL --- ' +this.totales+'€ ---';
				if(contador == 2){ temp = false; this.impresion = '*** INVOICE #2 - ' + (!this.titulo ? '<noname>': this.titulo) +' ***\n';}
            return p;
        }else{
				for (var i = 0; i < this.dat.length; i++) {
                    var sub = 0;
                    sub = (parseFloat(this.pre[i]) * parseFloat(this.cant[i]));
                    this.impresion += '* ' + this.dat[i] +' (' + this.pre[i] +'€) x ' + this.cant[i] + ' = '+ sub + '€\n';
                }

                this.impresion += '* TOTAL = ' +this.totales + '€';

            temp = true;
			return this.impresion;
            
        }
        
    }

    static resetTemplate(){

    }
	
}




/*
*** INVOICE #1 - Video games ***
* Nintendo 3DS Flame Red (169â‚¬) x 2 = 338â‚¬
* Sony PS3 160GB (299â‚¬) x 1 = 299â‚¬
* TOTAL = 637â‚¬
[JavaScript Error] TypeError at line undefined: */