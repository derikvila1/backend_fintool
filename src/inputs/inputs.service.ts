
import { Injectable, Inject } from '@nestjs/common';
import { resultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { InputsCreateDto } from './dto/inputs.create.dto';
import { Inputs } from './inputs.entity';

@Injectable()
export class InputsService {
  constructor(
    @Inject('INPUTS_REPOSITORY')
    private inputsRepository: Repository<Inputs>,
  ) {}

  async findAll(id:number): Promise<Inputs[]> {
    return this.inputsRepository.find({where:{userId:id}});
  }
  async deletar (id : number):Promise<any>{
    return this.inputsRepository.delete(id);
  };

  async cadastrar(data: InputsCreateDto): Promise<resultDto>{
    let input = new Inputs();
    console.log(data);
    input.userId = data.userId
    input.value = data.value
    input.category = data.category
    input.output = data.output
    input.date = data.date
    input.description = data.description
    return this.inputsRepository.save(input)
    .then((result) => {
      return <resultDto>{
        status: true,
        message: "item cadastrado"
      }
    })
    .catch((error)=>{
      return<resultDto>{
        status: false,
        message: "erro ao cadastrar"
      }
    })

  }
}
