import { describe, expect, it } from 'vitest';
import { RResponse } from './response';

describe('RResponse tests', async () => {

    it('should check status', async () => {

        let response = new RResponse(
            new Response(null, { status: 200 }),
        );

        expect(response.statusIs(200)).toBeTruthy();
        expect(response.statusIs(300)).toBeFalsy();
        
        response = new RResponse(
            new Response(null, { status: 500 }),
        );

        expect(response.statusIs(500)).toBeTruthy();
        expect(response.statusIs(400)).toBeFalsy();
    });
});