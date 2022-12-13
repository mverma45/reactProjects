class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    static generatePassword() {
      Math.floor(Math.random() * 10000);
    }
  
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      return Math.floor(Math.random() * 10000);
    }
  }
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  
    get certifications() {
      return this._certifications;
    }
  
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  class Doctor extends HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
      this._insurance;
    }
  
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return (this._remainingVacationDays -= daysOff);
    }
  
    get insurance() {
      return this._insurance;
    }
    takeVacationDays() {
      this._remainingVacationDays;
    }
  }
  const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification("Genetics");
  console.log(nurseOlynyk.certifications);
  