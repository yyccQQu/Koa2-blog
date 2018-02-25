var expect = require('chai').expect;
var apiModel = require('../lib/mysql.js')

describe('add User', function() {
	// 创建一个用户
	before((done) => {
		apiModel.insertData(['yyccQQu','123456']).then(()=>{
			done()
		});
	});
	// 删除一个用户
	after((done) => {
		apiModel.deleteUserData('yyccQQu').then(()=>{
			done()
		});
	})
	// 查找用户
	it('should return an Array contain {} when find by name="yyccQQu"', (done) => {
		apiModel.findUserData('yyccQQu').then((user) => {
		  	var data = JSON.parse(JSON.stringify(user));
		  	console.log(data)
		  	expect(data).to.have.lengthOf(1);
		  	done();
		}).catch((err)=>{
			if (err) {
		       return done(err);
		    }
		})
	});
});