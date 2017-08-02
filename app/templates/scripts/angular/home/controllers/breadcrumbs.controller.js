class BreadCrumbsController {
  constructor() {
    var vm = this;
    vm.links = {};
    vm.links["OpenMRS Demo Client App"] = "/";
    vm.links["Demo1"] = "";
    vm.links["Demo2"] = "";
  }
}

export default BreadCrumbsController;
