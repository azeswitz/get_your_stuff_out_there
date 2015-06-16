describe('Phone', function(){
    var Phone;
    beforeEach(module('demoApp'));
    beforeEach(inject(function(_Phone_){
        Phone=_Phone_;
    }));
    
    describe('The Phone service', function(){
        
        it('should have a constructure that assigns the name passed to it', function(){
            expect(new Phone('iPhone 6').to.have.property('name', 'iPhone 6'));
        });
            
        it('should auto-assign an id based on the lowercase name replacing spaces with dashes', function(){
            var newPhone = new Phone('iPhone 6');
            expect(newPhone).to.have.property('id', 'iphone-6');
        });
        
    });
});