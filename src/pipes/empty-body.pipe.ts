import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class EmptyBodyPipe implements PipeTransform {
    transform(body: Record<string, any>) {
        if (Object.keys(body).length === 0)
            throw new BadRequestException('Body can not be empty.');
        return body;
    }
}