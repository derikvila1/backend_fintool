
import { Injectable, Inject } from '@nestjs/common';
import { resultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
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

  async cadastrar(data: UserCreateDto): Promise<resultDto>{
    let user = new User()
    user.email = data.email
    user.name = data.name
    user.password = data.passord
    return this.userRepository.save(user)
    .then((result) => {
      return <resultDto>{
        status: true,
        message: "usuario cadastrado"
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
