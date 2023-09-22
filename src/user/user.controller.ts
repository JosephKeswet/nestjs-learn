import { Body, Controller, Get, Patch,  UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(private userService:UserService){}

    @Get('user')
    getMe(@GetUser() user:User) {
        return user;
    }

    @Patch('user/edit')
    editUser(@GetUser('id') user:User,@Body() dto:EditUserDto) {
        const userId = user.id;
        return this.userService.editUser(userId,dto);
    }
  
}
