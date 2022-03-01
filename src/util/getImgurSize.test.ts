import { getImgurSize } from './getImgurSize';

describe('getImgurSize', () => {
    it('should match based on partial title', () => {
        expect(getImgurSize('test.jpg', 'm')).toStrictEqual('testm.jpg');
        expect(getImgurSize('test.html', 'm')).toStrictEqual('test.html');
    });
});
