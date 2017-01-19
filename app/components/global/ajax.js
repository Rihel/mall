export default class Ajax {
	constructor(opt){
		let defaults = {
			type        : 'GET',
			url         : '',
			data        : '',
			async       : true,
			cache       : true,
			contentType : 'application/x-www-form-urlencoded',
			success     : function(){
			},
			error       : function(){
			}
		};
		this.setting=Object.assign(defaults,opt);
		this.ajax();
	}

	createXHR(){
		return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	}
	ajax(){
		let xhr=this.createXHR(),
			opt=this.setting;
		let type=opt.type.toUpperCase();
		xhr.open(type,`${opt.url}?t=${new Date().getTime()}`,opt.async);
		if(type==='GET'){
			xhr.send(null);
		}else {
			xhr.setRequestHeader('Content-type',opt.contentType);
		}
		xhr.onreadystatechange=()=>{
			if(xhr.readyState===4){
				if(xhr.status===200){
					opt.success(JSON.parse(xhr.responseText));
				}else{
					opt.error();
				}
			}
		}
	}
}

