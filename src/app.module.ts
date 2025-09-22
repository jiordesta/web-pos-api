import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserCredentialService } from './user-credential/user-credential.service';
import { UserCredentialModule } from './user-credential/user-credential.module';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';
import { StoreDetailsModule } from './store-details/store-details.module';
import { StoreInventoryModule } from './store-inventory/store-inventory.module';
import { InventoryProductController } from './inventory-product/inventory-product.controller';
import { InventoryProductModule } from './inventory-product/inventory-product.module';
import { ProductDetailsService } from './product-details/product-details.service';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductQrController } from './product-qr/product-qr.controller';
import { ProductQrModule } from './product-qr/product-qr.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule, 
    // UserDetailsModule, 
    // UserCredentialModule, 
    // UserRoleModule, 
    // RoleModule,
    // StoreDetailsModule,
    // StoreInventoryModule, 
    // InventoryProductModule, 
    // ProductDetailsModule, 
    // ProductQrModule, 
    AuthenticationModule,
  ],
  controllers: [
    // AppController, 
    // InventoryProductController, 
    // ProductQrController, 
    // AuthenticationController
  ],
  providers: [
    // AppService, 
    // UserCredentialService, 
    // ProductDetailsService, 
    AuthenticationService,
    JwtService
  ],
})
export class AppModule {}
