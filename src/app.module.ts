import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}
