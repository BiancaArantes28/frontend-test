$(".valida-formulario").blur(function(){
			var nome = $(this).attr("name");
			
			if($(this).val() === ""){
				$("#info_"+nome).html("Preencha o campo acima");
				$(this).css({"border":"1px solid red"});
			}else{
				$("#info_"+nome).html("");
				$(this).css({"border":"1px solid green"});
			}
		});
		
		$(".valida-formulario").keyup(function(){
			var nome = $(this).attr("name");
			if(nome === "nome"){
				
				var campo = $(this).val();
				var resultado = validaNome(campo);
						
				if(resultado){
					$("#info_"+nome).html("");
					$(this).css({"border":"1px solid green"});
				}else{
					$("#info_"+nome).html("Caracter inválido");
					$(this).css({"border":"1px solid red"});
				}
			}if(nome === "telefone"){
				var campo = $(this).val();
				var resultado = validaTelefone(campo);
						
				if(resultado){
					$("#info_"+nome).html("");
					$(this).css({"border":"1px solid green"});
					mascara( this, mtel );
				}else{
					$("#info_"+nome).html("Caracter inválido");
					$(this).css({"border":"1px solid red"});
				}
			}
			
		});
		
		$("#salvar").click(function(){
			$(".valida-formulario").each(function(){
				var nome = $(this).attr("name");
				var erro = 0;
				if($(this).val() === ""){
					$("#info_"+nome).html("Preencha o campo acima");
					$(this).css({"border":"1px solid red"});
				}else{
					if(nome === "nome"){
						var campo = $(this).val();
						var resultado = validaNome(campo);
						
						if(resultado){
							$("#info_"+nome).html("");
							$(this).css({"border":"1px solid green"});
						}else{
							$("#info_"+nome).html("Caracter inválido");
							$(this).css({"border":"1px solid red"});
						}
					}if(nome === "telefone"){
						var campo = $(this).val();
						var resultado = validaTelefone(campo);
						
						if(resultado){
							$("#info_"+nome).html("");
							$(this).css({"border":"1px solid green"});
							mascara( this, mtel );
						}else{
							$("#info_"+nome).html("Caracter inválido");
							$(this).css({"border":"1px solid red"});
						}
					}if(nome === "email"){
						var campo = $(this).val();
						var resultado = validaEmail(this);
							
						if(resultado){
							$("#info_"+nome).html("");
							$(this).css({"border":"1px solid green"});
							
						}else{
							$("#info_"+nome).html("Email inválido");
							$(this).css({"border":"1px solid red"});
						}
					}
					
				}
			});
		});
		
		$("#cancelar").click(function(){
			$(".valida-formulario").val("");
		});
		
		function validaNome(campo){
			
		  var regex = '[^a-zA-Z ]+';
		  if(campo.match(regex)) {
			return false;
		  }
		  else {
			return true;
		  }
		}
		
		function validaTelefone(campo){
		  var regex = '[^0-9()-]+';
		  if(campo.match(regex)) {
			return false;
		  }
		  else {
			return true;
		  }
		}
		function validaEmail(field){
		    usuario = field.value.substring(0, field.value.indexOf("@"));
			dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
			if ((usuario.length >=1) &&
				(dominio.length >=3) && 
				(usuario.search("@")==-1) && 
				(dominio.search("@")==-1) &&
				(usuario.search(" ")==-1) && 
				(dominio.search(" ")==-1) &&
				(dominio.search(".")!=-1) &&      
				(dominio.indexOf(".") >=1)&& 
				(dominio.lastIndexOf(".") < dominio.length - 1)) {
				return true;
			
			}
			else{
				return false;
			
			}
		}
		//colocando máscara no telefone
		function mascara(o,f){
			v_obj=o
			v_fun=f
			setTimeout("execmascara()",1)
		}
		function execmascara(){
			v_obj.value=v_fun(v_obj.value)
		}
		function mtel(v){
			v=v.replace(/\D/g,"");             
			v=v.replace(/^(\d{2})(\d)/g,"($1)$2"); 
			v=v.replace(/(\d)(\d{4})$/,"$1-$2");    
			return v;
		}