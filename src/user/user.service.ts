import { resultAuth } from './../dto/result.dto';
import { Injectable, Inject } from '@nestjs/common';
import { resultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserCreateDto, UserAuth } from './dto/user.create.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async auth(data: UserAuth): Promise<resultAuth|resultDto> {
    const user:User = await this.userRepository.findOne({ email: data.email });
    if(typeof user == 'undefined') return <resultDto>{ status: false, message:'Usuário não encontrado!'};
    if(data.password == user.password) return <resultAuth>{status:true, message:'Usuário logado', user:{id:user.id, name:user.name, email:user.email}};
    return <resultDto>{ status: false, message: `Password incorreto!` };
  }
  async cadastrar(data: UserCreateDto): Promise<resultDto> {
    const user = new User();
    user.email = data.email;
    user.name = data.name;
    user.password = data.password;
    return this.userRepository
      .save(user)
      .then((result) => {
        return <resultDto>{
          status: true,
          message: 'usuario cadastrado',
        };
      })
      .catch((error) => {
        return <resultDto>{
          status: false,
          message: 'erro ao cadastrar',
        };
      });
  }
}
