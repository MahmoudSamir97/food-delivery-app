import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { BadRequestException, Query } from '@nestjs/common';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userSrevice: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill in all fields ');
    }
    const user = await this.userSrevice.register(registerDto);
    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userSrevice.getUsers();
  }
}
