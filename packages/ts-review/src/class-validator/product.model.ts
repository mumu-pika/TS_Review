// 详见 https://github.com/typestack/class-validator
import { IsNotEmpty, IsNumber, IsPositive} from 'class-validator'

export class NewProduct {
  @IsNotEmpty()
  title: string

  @IsNumber()
  @IsPositive()
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }

  getInformation() {
    return [this.title, `$${this.price}`]
  }
}