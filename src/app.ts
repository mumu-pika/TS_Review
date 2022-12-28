// 部门类
abstract class Department {
  static country: string = 'china'
  protected readonly id: string
  public name: string
  protected employees: string[] = []

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
  // describe(this: Department) {
  //   console.log(
  //     `Department: (${this.id}) - (${
  //       this.name
  //     }) - (${this.employees.toString()})`
  //   )
  // }
  // 这里我们将describe方法抽象，让子类去做具体实现
  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
}

// 部门的子类 IT部门
class ITDepartment extends Department {
  private admins: string[] = []
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
  describe(this: ITDepartment): void {
    console.log(
      `IT Department: (${this.id}) - (${
        this.name
      }) - (${this.employees.toString()})`
    )
  }
}

// 创建技术部
const TD = new ITDepartment('001', ['admins...'])
TD.addEmployee('saber')
TD.addEmployee('pika')
TD.describe()
