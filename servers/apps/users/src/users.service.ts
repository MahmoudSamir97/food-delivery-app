import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { Avatar } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtservice: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = { name, email, password };

    return user;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const login = { email, password };
    return login;
  }

  async getUsers() {
    const users = [
      {
        id: '2621de',
        name: 'Mohsen',
        email: 'mlksd@yahoo.com',
        password: '5d5f1r5',
      },
    ];
    return users;
  }
}
