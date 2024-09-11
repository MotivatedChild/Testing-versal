
var skill = /** @class */ (function () {
    function skill(elementId, buttonId) {
        this.element = document.getElementById(elementId);
        this.button = document.getElementById(buttonId);
        this.addToggle();
    }
    skill.prototype.addToggle = function () {
        var _this = this;
        this.button.addEventListener('click', function () {
            if (_this.element.style.display === 'none') {
                _this.element.style.display = 'block';
                _this.button.textContent = 'Hide Section';
            }
            else {
                _this.element.style.display = 'none';
                _this.button.textContent = 'Show Section';
            }
        });
    };
    return skill;
}());
console.log(skill);
