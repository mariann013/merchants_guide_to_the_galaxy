describe('Roman numeral to Integer', function () {
    var integerToRoman;

    beforeEach(function() {
        integerToRoman = new IntegerToRoman();;
    });

    it('should convert the number 1 into I', function() {
        expect(integerToRoman.convert(1)).toEqual('I');
    });
    it('should convert the number 2 into II', function() {
        expect(integerToRoman.convert(2)).toEqual('II');
    });
    it('should convert the number 3 into III', function() {
        expect(integerToRoman.convert(3)).toEqual('III');
    });
    it('should convert the number 4 into IV', function() {
        expect(integerToRoman.convert(4)).toEqual('IV');
    });
    it('should convert the number 2648 into MMDCXLVIII', function() {
        expect(integerToRoman.convert(2648)).toEqual('MMDCXLVIII');
    });

});