import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, isEnum, IsInt, IsNotEmpty,  IsOptional, ValidateNested } from "class-validator";
import { SCREEN } from "./context/context.constant";

export class UserIdentityDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    analytics_user_id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    @IsOptional()
    project_id: string;

    @ApiProperty({ required: false })
    @IsOptional()
    parameters?: Object;
}

export class DeviceDto {
    @ApiProperty({ required: false })
    @IsOptional()
    os?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    carrier?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    device_id?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    unique_id?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    manufacturer?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    model?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    os_ver?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    screen_width?: number;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    screen_height?: number;
    @ApiProperty({ required: false })
    @IsEnum(SCREEN)
    type: string;
    @ApiProperty({ required: false })
    @IsOptional()
    wifi?: boolean;
}

export class LocationDto {
    @ApiProperty({ required: false })
    @IsOptional()
    country?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    city?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    region?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    longitude?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    latitude?: string;
}

export class AppDto {
    @ApiProperty({ required: false })
    @IsOptional()
    version?:string;
    @ApiProperty({ required: false })
    @IsOptional()
    build?: string;
}

export class CreateAnalyticsUserDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    @IsOptional()
    project_id: string;

    @ApiProperty({ required: false })
    @ValidateNested()
    @IsOptional()
    @Type(() => AppDto)
    app: AppDto;

    @ApiProperty({ required: false })
    @ValidateNested()
    @IsOptional()
    @Type(() => DeviceDto)
    device: DeviceDto;

    @ApiProperty({ required: false })
    @ValidateNested()
    @IsOptional()
    @Type(() => LocationDto)
    location: LocationDto;

    @ApiProperty({ required: false })
    @IsOptional()
    timestamp?: number;
}

export class AnalyticsUserIDDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    analytics_user_id: string
}