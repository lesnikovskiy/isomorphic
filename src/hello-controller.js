import Controller from './lib/controller';
import nunjucks from 'nunjucks';

function getName() {

}

export default class HelloController extends Controller {
	toString(callback) {
		nunjucks.renderString('<p>hello </p>', getName(this.context), (err, html) => {
			if (err) {
				return callback(err, null);
			}

			callback(null, html);
		})
	}
}