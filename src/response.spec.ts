import { describe, expect, it } from 'vitest';
import { RResponse } from './response';
import { HttpStatus } from './specs/status';

describe('RResponse tests', async () => {

    it('should check status', async () => {

        let response = new RResponse(
            new Response(null, { status: 200 }),
        );

        expect(response.statusIs(HttpStatus.Ok)).toBeTruthy();
        expect(response.statusIs(HttpStatus.PermanentRedirect)).toBeFalsy();
        
        response = new RResponse(
            new Response(null, { status: 500 }),
        );

        expect(response.statusIs(HttpStatus.InternalServerError)).toBeTruthy();
        expect(response.statusIs(HttpStatus.BadRequest)).toBeFalsy();
    });
});