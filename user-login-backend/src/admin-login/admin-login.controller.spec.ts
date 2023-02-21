import { Test, TestingModule } from '@nestjs/testing';
import { AdminLoginController } from './admin-login.controller';

describe('AdminLoginController', () => {
  let controller: AdminLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminLoginController],
    }).compile();

    controller = module.get<AdminLoginController>(AdminLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
